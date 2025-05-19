import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Shopping Cart</h2>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-slate-300">
                    <span>Items ({cart.length})</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-slate-700 my-4"></div>
                  <div className="flex justify-between text-white font-semibold text-lg">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <FaArrowRight />
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-slate-700/50">
                <div className="flex items-center space-x-3 text-blue-500 mb-4">
                  <FaShoppingBag className="text-2xl" />
                  <h3 className="text-white font-semibold">Free Shipping</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Free shipping on all orders over $50. Your order qualifies for free shipping!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700/50 max-w-md">
              <FaShoppingBag className="text-6xl text-blue-500 mx-auto mb-6" />
              <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
              <p className="text-slate-400 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;


