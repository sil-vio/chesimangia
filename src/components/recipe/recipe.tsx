import { component$, useContext, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { AppContext, AppState } from '~/routes';


export default component$(() => {

    const state: AppState = useContext(AppContext);

    return (
        <div>{ 
            state.modale ? <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="p-6 bg-white rounded-xl">
                                        <a
                                            href="#"
                                            class="group"
                                        >
                                            <div class="overflow-hidden">
                                                <img
                                                    src="https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                                    class="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out"
                                                    alt="Sample Cover"
                                                />
                                            </div>

                                            <h3
                                                class="mt-6 leading-normal text-gray-800 group-hover:text-purple-400 font-semibold text-2xl lg:text-4xl line-clamp-3 transition translation-all duration-200 ease-in-out"
                                                title="Lorem Ipsum is simply dummy text of the printing"
                                            >
                                                Lorem Ipsum is simply dummy text of the printing
                                            </h3>
                                        </a>

                                        <div class="mt-6">


                                            <p class="mt-6 leading-normal line-clamp-3 text-lg text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi explicabo ipsa laudantium maxime nemo non numquam praesentium quia quidem reiciendis sint tempora temporibus tenetur, totam unde vel velit voluptas? Alias.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick$={() => (state.modale = !state.modale)} class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
        }
        </div>


    );
});
