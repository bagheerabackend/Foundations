<template>
    <section id="donate">
        <div class="flex flex-col md:flex-row py-[2em] 2xl:px-[5em]">
            <div
                class="bg-[#E9ECEF] py-[1.5em] 2xl:py-[3em] px-[1em] md:h-[45em] 2xl:h-[50em] md:px-[3em] md:w-[60%] rounded-[1.5em] md:rounded-[0] md:rounded-l-[1.5em] text-center">
                <h2 class="font-bold text-[2.5em] ">Donate</h2>
                <p class="italic">"The smallest act of kindness is worth
                    more than the grandest intention."</p>
                <div class="2xl:mt-[3em]">
                    <div
                        class="border-1 border-[#FB8500] flex gap-[2em] rounded-[1em] mt-[2em] w-[100%] px-[1.5em] py-[1em] md:py-[1.5em]">
                        <p class="font-semibold ">₹</p>
                        <div class="w-[1px] h-[1.5em] bg-[#FB8500]"></div>
                        <input v-model="donationAmount" type="number" placeholder="Enter Amount"
                            class="focus:outline-none w-[100%] text-[1em]" />
                    </div>
                    <button @click="openModal"
                        class="bg-[#FB8500]/80 hover:bg-[#FB8500] text-white w-[100%] py-[0.8em] md:py-[1em] rounded-[1em] mt-[1em] md:mt-[2em] font-bold text-[1.25em] transition-colors duration-300">
                        Donate & Support
                    </button>
                </div>
                <div
                    class="flex flex-col md:flex-row mt-[1em] 2xl:mt-[3em] md:h-[20em] py-[1em] gap-[1em] md:gap-[2em]">
                    <img src="~/assets/images/motherteresa.webp" alt="" srcset=""
                        class="w-[100%] h-[100%] md:w-[20em] rounded-[1em] bg-cover bg-center ">
                    <div class="md:w-[50%] flex flex-col md:justify-center">
                        <svg class="w-[20px] md:w-[50px] " viewBox="0 0 15 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
                                fill="#000000" />
                        </svg>
                        <p class="text-[1.5em] italic mt-[0.5em] leading-[1.25em]">"There are no great things, only
                            small
                            things with great love. Happy are those."</p>
                        <p class="text-[1.5em] text-end mt-[1em] font-bold ">- Mother Teresa </p>
                    </div>
                </div>
            </div>
            <div class="md:w-[40%] hidden md:block 2xl:h-[50em]">
                <img src="~/assets/images/donate.avif" alt=""
                    class="rounded-b-[1.5em] md:rounded-bl-[0] md:rounded-r-[1.5em] h-full object-cover" />
            </div>

            <Transition name="modal">
                <div v-if="showModal" @click="closeModal"
                    class="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 px-[1em]">
                    <div @click.stop class="bg-white rounded-[1.5em] p-[2em] max-w-[500px] w-full shadow-2xl">
                        <div class="flex justify-between items-center mb-[1em]">
                            <h3 class="text-[2em] font-bold text-[#FB8500]">Confirm Donation</h3>
                            <button @click="closeModal"
                                class="text-gray-500 hover:text-gray-700 text-[2.5em] leading-none">
                                &times;
                            </button>
                        </div>

                        <div class="mb-[1em]">
                            <p class="text-[1.2em] text-center">You are about to donate</p>
                            <p class="text-[2.5em] font-bold text-[#FB8500] text-center">₹{{ donationAmount || 0 }}</p>
                        </div>

                        <div class="mb-[1em]">
                            <div class="my-5">
                                <label for="name" class="py-2 font-semibold">Full Name</label>
                                <input v-model="name" type="text" placeholder=""
                                    class="focus:outline-none w-[100%] text-[1em] border-1 border-[#FB8500] flex gap-[2em] rounded-[1em] w-[100%] px-[1.5em] py-[1em] md:py-[1.25em]" />
                            </div>
                            <div class="my-5">
                                <label for="name" class="py-2 font-semibold">Phone Number</label>
                                <input v-model="name" type="number" placeholder=""
                                    class="focus:outline-none w-[100%] text-[1em] border-1 border-[#FB8500] flex gap-[2em] rounded-[1em] w-[100%] px-[1.5em] py-[1em] md:py-[1.25em]" />
                            </div>
                            <div class="my-5">
                                <label for="name" class="py-2 font-semibold">Email Address <span
                                        class="font-light">(Optional)</span></label>
                                <input v-model="name" type="number" placeholder=""
                                    class="focus:outline-none w-[100%] text-[1em] border-1 border-[#FB8500] flex gap-[2em] rounded-[1em] w-[100%] px-[1.5em] py-[1em] md:py-[1.25em]" />
                            </div>
                        </div>

                        <div class="text-center mb-[1em]">
                            <p class="text-gray-600 italic">"Your generosity brings hope and creates positive change."
                            </p>
                        </div>

                        <div class="flex gap-[1em]">
                            <button @click="closeModal"
                                class="flex-1 bg-gray-300 text-gray-700 py-[1em] rounded-[1em] font-semibold hover:bg-gray-400 transition-colors duration-300">
                                Cancel
                            </button>
                            <button @click="confirmDonation"
                                class="flex-1 bg-[#FB8500]/80 hover:bg-[#FB8500] text-white py-[1em] rounded-[1em] font-semibold transition-colors duration-300">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const donationAmount = ref('')

const openModal = () => {
    if (!donationAmount.value || donationAmount.value <= 0) {
        alert('Please enter a valid donation amount')
        return
    }
    showModal.value = true
}

const closeModal = () => showModal.value = false

const confirmDonation = () => {
    // Add your donation processing logic here
    alert(`Thank you for your donation of ₹${donationAmount.value}!`)
    closeModal()
    donationAmount.value = ''
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
    transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
    transform: scale(0.9);
}
</style>