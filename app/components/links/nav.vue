<template>
    <div class="bg-[#ced4da] fixed bottom-0 w-full">
        <nav class="flex px-[2em] justify-between md:justify-center md:gap-[10em] py-[0.8em] md:py-[1em]">
            <NuxtLink class="flex flex-col items-center justify-center" active-class="text-[#FB8500] font-semibold"
                exact to="/" v-slot="{ isActive }">
                <svg v-if="isActive" width="20px" height="20px" viewBox="0 0 15 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L0 6.27003V13.5C0 14.3284 0.671573 15 1.5 15H5.5C5.77614 15 6 14.7761 6 14.5V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V14.5C9 14.7761 9.22386 15 9.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.27003L7.8254 0.120372Z"
                        fill="currentcolor" />
                </svg>
                <svg v-else width="20px" height="20px" viewBox="0 0 15 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.5 0.5L7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L7.5 0.5ZM0.5 6.5L0.174604 6.12037L0 6.27003V6.5H0.5ZM5.5 14.5V15C5.77614 15 6 14.7761 6 14.5H5.5ZM9.5 14.5H9C9 14.7761 9.22386 15 9.5 15V14.5ZM14.5 6.5H15V6.27003L14.8254 6.12037L14.5 6.5ZM1.5 15H5.5V14H1.5V15ZM14.8254 6.12037L7.8254 0.120372L7.1746 0.879628L14.1746 6.87963L14.8254 6.12037ZM7.1746 0.120372L0.174604 6.12037L0.825396 6.87963L7.8254 0.879628L7.1746 0.120372ZM6 14.5V11.5H5V14.5H6ZM9 11.5V14.5H10V11.5H9ZM9.5 15H13.5V14H9.5V15ZM15 13.5V6.5H14V13.5H15ZM0 6.5V13.5H1V6.5H0ZM7.5 10C8.32843 10 9 10.6716 9 11.5H10C10 10.1193 8.88071 9 7.5 9V10ZM7.5 9C6.11929 9 5 10.1193 5 11.5H6C6 10.6716 6.67157 10 7.5 10V9ZM13.5 15C14.3284 15 15 14.3284 15 13.5H14C14 13.7761 13.7761 14 13.5 14V15ZM1.5 14C1.22386 14 1 13.7761 1 13.5H0C0 14.3284 0.671573 15 1.5 15V14Z"
                        fill="#000000" />
                </svg>
                Home
            </NuxtLink>
            <NuxtLink class="flex flex-col items-center justify-center" active-class="text-[#FB8500] font-semibold"
                exact to="/images" v-slot="{ isActive }">
                <svg v-if="isActive" fill="currentcolor" width="20px" height="20px" viewBox="0 0 36 36" version="1.1"
                    preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>image-solid</title>
                    <path
                        d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z"
                        class="clr-i-solid clr-i-solid-path-1"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                </svg>
                <svg v-else fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1"
                    preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>image-line</title>
                    <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,30V6H32V30Z"
                        class="clr-i-outline clr-i-outline-path-1"></path>
                    <path
                        d="M8.92,14a3,3,0,1,0-3-3A3,3,0,0,0,8.92,14Zm0-4.6A1.6,1.6,0,1,1,7.33,11,1.6,1.6,0,0,1,8.92,9.41Z"
                        class="clr-i-outline clr-i-outline-path-2"></path>
                    <path
                        d="M22.78,15.37l-5.4,5.4-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81A1,1,0,0,0,22.78,15.37Z"
                        class="clr-i-outline clr-i-outline-path-3"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                </svg>
                Images
            </NuxtLink>
            <NuxtLink class="flex flex-col items-center justify-center" active-class="text-[#FB8500] font-semibold"
                exact to="/video" v-slot="{ isActive }">
                <svg v-if="isActive" fill="currentcolor" width="20px" height="20px" viewBox="0 0 36 36" version="1.1"
                    preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>image-solid</title>
                    <path
                        d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z"
                        class="clr-i-solid clr-i-solid-path-1"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                </svg>
                <svg v-else fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1"
                    preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>image-line</title>
                    <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,30V6H32V30Z"
                        class="clr-i-outline clr-i-outline-path-1"></path>
                    <path
                        d="M8.92,14a3,3,0,1,0-3-3A3,3,0,0,0,8.92,14Zm0-4.6A1.6,1.6,0,1,1,7.33,11,1.6,1.6,0,0,1,8.92,9.41Z"
                        class="clr-i-outline clr-i-outline-path-2"></path>
                    <path
                        d="M22.78,15.37l-5.4,5.4-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81A1,1,0,0,0,22.78,15.37Z"
                        class="clr-i-outline clr-i-outline-path-3"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                </svg>
                Videos
            </NuxtLink>
        </nav>
    </div>
</template>