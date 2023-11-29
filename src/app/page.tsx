import React from "react";

const Page = () => {
    return (
        <div className="h-full w-full flex p-4 text-[#555d65]">
            <section
                aria-label="menu"
                className="flex-none w-full md:w-2/3 xl:w-3/4 px-[55px] py-[30px]"
            >
                <h1 className="text-2xl">Menu</h1>
            </section>

            <section
                aria-label="cart"
                className="flex-none w-full md:w-1/3 xl:w-1/4"
            >
                <div className="h-full w-full flex flex-col gap-2">
                    <section
                        aria-label="cart-items"
                        className="bg-white grow rounded-lg px-[25px] py-[35px]"
                    >
                        <h1 className="text-2xl">Cart</h1>
                    </section>

                    <section aria-label="cart-action" className="space-y-2">
                        <input
                            type="button"
                            value="Address"
                            className="bg-[#01bfff] text-[#d5f2ff] h-[60px] w-full rounded-lg"
                        />

                        <input
                            type="button"
                            value="Checkout"
                            className="bg-[#4e565e] text-[#babdc2] h-[60px] w-full rounded-lg"
                        />
                    </section>

                    <section
                        aria-label="cart-actions"
                        className="flex-initial"
                    ></section>
                </div>
            </section>
        </div>
    );
};

export default Page;
