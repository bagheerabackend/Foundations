<script setup>
import { ref, onMounted } from 'vue';
import { fetchVideos } from '~/services/getGallery';

const data = ref([]);
const lastId = ref(0);
const error = ref(null);
const loading = ref(false);
const selectedVideo = ref(null);
const loadingMore = ref(false);

onMounted(async () => {
    await fetchVideo();
});

async function fetchVideo() {
    loading.value = true;
    try {
        const result = await fetchVideos(lastId.value);
        console.log("result:", result.value);

        data.value = [...data.value, ...result.data.video];
        lastId.value = result.data.last_id;

        console.log("Fetched videos:", data.value, "Last ID:", lastId.value);
    } catch (err) {
        error.value = err;
        console.error("Error fetching videos:", err);
    } finally {
        loading.value = false;
    }
}

async function loadMore() {
    loadingMore.value = true;
    try {
        const result = await fetchVideos(lastId.value);
        data.value = [...data.value, ...result.data.video];
        lastId.value = result.data.last_id;
    } catch (err) {
        error.value = err;
    } finally {
        loadingMore.value = false;
    }
}

function openVideo(video) {
    selectedVideo.value = video;
}

function closeVideo() {
    selectedVideo.value = null;
}
</script>

<template>
    <div class="min-h-[70svh] py-[1em] md:p-8">
        <div v-if="loading" class="max-w-7xl mx-auto">
            <div class="flex items-center justify-center py-20">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        </div>

        <div v-else-if="error" class="max-w-7xl mx-auto">
            <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p class="text-red-800 font-medium">Error loading videos</p>
                <p class="text-red-600 text-sm mt-2">{{ error }}</p>
            </div>
        </div>

        <div v-else class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                <div v-for="(video, index) in data" :key="index" :class="[
                    'relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 hover:shadow-xl',
                    index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : '',
                    index % 11 === 0 ? 'lg:row-span-2' : '',
                    index % 13 === 0 ? 'md:col-span-2' : ''
                ]" @click="openVideo(video)">
                    
                    <!-- Video Preview -->
                    <video
                        :src="video"
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        muted
                        @mouseenter="(e) => e.target.play()"
                        @mouseleave="(e) => { e.target.pause(); e.target.currentTime = 0; }"
                    ></video>

                    <!-- Play Icon Overlay -->
                    <div class="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/20">
                        <div class="bg-white/90 backdrop-blur-sm rounded-full p-4">
                            <svg class="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    <!-- Zoom Icon -->
                    <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div v-if="data.length > 0" class="mt-[5em] text-center">
                <button @click="loadMore" :disabled="loadingMore"
                    class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="loadingMore" class="flex items-center gap-2">
                        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Loading...
                    </span>
                    <span v-else>Load More</span>
                </button>
            </div>
            <div class="text-center" v-else>No Videos Found</div>
        </div>

        <!-- Video Lightbox Modal -->
        <Teleport to="body">
            <Transition name="fade">
                <div v-if="selectedVideo" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    @click="closeVideo">
                    <button class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                        @click="closeVideo">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="max-w-lg w-full" @click.stop>
                        <video
                            :src="selectedVideo"
                            class="w-full rounded-lg"
                            controls
                            autoplay
                            :key="selectedVideo"
                        ></video>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>