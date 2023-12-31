/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Page = () => {
    return (
        <div className="h-full w-full flex p-4 text-[#555d65]">
            {/* MENU */}
            <section
                aria-label="menu"
                className="flex-none w-full md:w-2/3 xl:w-3/4 px-[55px] py-[30px]"
            >
                <h1 className="text-2xl mb-[40px]">Menu</h1>

                <section
                    aria-label="food-items"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center"
                >
                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Chicken Alfredo
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Grilled Salmon
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Vegetarian Pasta
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Beef Lasagna
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Shrimp Scampi
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Margherita Pizza
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            BBQ Ribs
                        </figcaption>
                    </figure>

                    <figure
                        aria-label="food-item"
                        className="col-span-1 text-center"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="menu image"
                            width={150}
                            height={150}
                            className="border-4 border-white rounded-lg"
                        />

                        <figcaption className="text-[#babdc2]">
                            Tofu Stir-Fry
                        </figcaption>
                    </figure>
                </section>
            </section>

            {/* CART */}
            <section
                aria-label="cart"
                className="flex-none w-full md:w-1/3 xl:w-1/4"
            >
                <div className="h-full w-full flex flex-col gap-2">
                    <section
                        aria-label="cart-details"
                        className="bg-white grow rounded-lg px-[25px] py-[35px]"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <section
                                aria-label="cart-order"
                                className="space-y-2"
                            >
                                <h1 className="text-2xl mb-[40px]">Cart</h1>

                                <h2 className="font-semibold">Order(s)</h2>

                                <section
                                    aria-label="order-items"
                                    className="h-[500px] overflow-auto"
                                >
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <td>Chicken Alfredo</td>
                                                <td>15.99$</td>
                                                <td className="text-[22px]">
                                                    <IoMdCloseCircle />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Grilled Salmon</td>
                                                <td>18.99$</td>
                                                <td className="text-[22px]">
                                                    <IoMdCloseCircle />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            </section>

                            <section
                                aria-label="total-price"
                                className="flex justify-between"
                            >
                                <span className="font-semibold">Total</span>
                                <span className="text-2xl font-semibold">
                                    34.98$
                                </span>
                            </section>
                        </div>
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
