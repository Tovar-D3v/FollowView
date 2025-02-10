import React from "react";

const MessagesPage = () => {
  return (
    <div className="max-h-[90vh] flex-1 bg-muted/50 md:min-h-min rounded-xl">
      <section id="chat-clientes" class="flex h-[100%] overflow-hidden rounded-xl">
        <div class="bg-sidebar-foreground xl:w-3/12 lg:w-4/12 w-full p-4 rounded-xl">
          <h3 class="text-2xl mb-4 font-bold">Chats</h3>
          <div className="mb-4">
            <input type="text" placeholder="Buscar" className="p-1.5 pl-3 rounded-lg bg-white w-full"/>
          </div>
          <div class="overflow-auto h-4/5">
            <div class="flex mb-4 p-4 rounded bg-neutral-800">
              <img
                src="../../../images/img-01.jpeg"
                class=" rounded-full w-12 mr-4"
              />
              <div class="w-full overflow-hidden">
                <div class="flex mb-1">
                  <p class="font-medium flex-grow">Diego Velázquez</p>
                  <small class="text-gray-300">09:55 am</small>
                </div>
                <small class="overflow-ellipsis overflow-hidden block whitespace-nowrap text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas dapibus a erat ac facilisis. Quisque in fringilla
                  lorem.
                </small>
              </div>
            </div>
            
          </div>
        </div>
        <div class="bg-sidebar-foreground xl:w-9/12 lg:w-8/12 hidden lg:block border-gray-800" style={{borderLeft: '1px solid #3f3f46'}}>
          <div class="py-3 px-10 border-b">
            <div class="flex">
              <div class="flex flex-grow">
                <div class="relative mr-4">
                  <img
                    src="../../../images/img-02.jpeg"
                    class="rounded-full w-12 h-12"
                  />
                  <div class="absolute bg-red-300 p-1 rounded-full bottom-0 right-0 border-2 border-gray-800"></div>
                </div>
                <div>
                  <p class="font-medium">Daniela López</p>
                  <small class="text-gray-300">Online</small>
                </div>
              </div>
              <div class="flex">
                <svg
                  class="w-6 mr-4 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <svg
                  class="w-6 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="py-6 px-10 h-[83%] overflow-auto">
            <div class="flex flex-row-reverse mb-3">
              <img
                src="../../../images/img-01.jpeg"
                class="self-end rounded-full w-12 ml-4 h-12"
              />
              <div class="flex flex-col">
                <div class="bg-green-800 text-white p-6 rounded-xl rounded-br-none w-96 mb-2">
                  <p class="font-medium mb-1">Diego Velázquez</p>
                  <small class="inline-block mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas dapibus a erat ac facilisis. Quisque in fringilla
                    lorem.
                  </small>
                </div>
                <small class="text-gray-300 self-end">09:55 am</small>
              </div>
            </div>
            <div class="flex mb-3">
              <img
                src="../../../images/img-02.jpeg"
                class="self-end rounded-full w-12 mr-4 h-12"
              />
              <div class="flex flex-col">
                <div class="bg-zinc-800 p-6 rounded-xl rounded-bl-none w-96 shadow-sm mb-2">
                  <p class="font-medium mb-1">Daniela López</p>
                  <small class="inline-block text-gray-300 mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas dapibus a erat ac facilisis. Quisque in fringilla
                    lorem.
                  </small>
                </div>
                <small class="text-gray-300">09:55 am</small>
              </div>
            </div>
            <div class="flex flex-row-reverse mb-3">
              <img
                src="../../../images/img-01.jpeg"
                class="self-end rounded-full w-12 ml-4 h-12"
              />
              <div class="flex flex-col">
                <div class="bg-green-800 text-white p-6 rounded-xl rounded-br-none w-96 mb-2">
                  <p class="font-medium mb-1">Diego Velázquez</p>
                  <small class="inline-block mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas dapibus a erat ac facilisis. Quisque in fringilla
                    lorem.
                  </small>
                </div>
                <small class="text-gray-300 self-end">09:55 am</small>
              </div>
            </div>
          </div>
          <div class="flex py-3.5 px-10 border-t">
            <div class="w-4/5">
              <input
                type="text"
                class="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full"
                placeholder="Escribe tu mensaje..."
              />
            </div>
            <div class="w-1/5 flex justify-end">
              <svg
                class="w-6 mr-4 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <svg
                class="w-6 mr-4 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <a href="#" class="bg-green-800 text-white rounded px-4 py-2">
                Enviar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessagesPage;
