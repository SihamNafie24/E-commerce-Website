import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaGift, FaTag, FaLock, FaShieldAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();
  const totalAmount = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const handlePayment = () => {
    toast.success("Payment successful! Thank you for your purchase.");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Payment Methods */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-700/50 text-white hover:bg-slate-700 transition-all duration-200 border-2 border-transparent hover:border-blue-500">
                  <FaCreditCard className="text-2xl" />
                  <span>Credit Card</span>
                </button>
                <button className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-700/50 text-white hover:bg-slate-700 transition-all duration-200 border-2 border-transparent hover:border-blue-500">
                  <FaPaypal className="text-2xl" />
                  <span>PayPal</span>
                </button>
                <button className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-700/50 text-white hover:bg-slate-700 transition-all duration-200 border-2 border-transparent hover:border-blue-500">
                  <FaApplePay className="text-2xl" />
                  <span>Apple Pay</span>
                </button>
                <button className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-700/50 text-white hover:bg-slate-700 transition-all duration-200 border-2 border-transparent hover:border-blue-500">
                  <FaGooglePay className="text-2xl" />
                  <span>Google Pay</span>
                </button>
              </div>

              {/* Card Details Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Trust */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaLock className="text-2xl text-blue-500" />
                  <span className="text-white">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-2xl text-blue-500" />
                  <span className="text-white">SSL Encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary & Offers */}
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700/50">
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
                onClick={handlePayment}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                Complete Purchase
              </button>
            </div>

            {/* Special Offers */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 text-blue-500 mb-4">
                <FaTag className="text-2xl" />
                <h3 className="text-white font-semibold">Special Offers</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/20">
                  <p className="text-white font-medium">Get 20% off on your next purchase!</p>
                  <p className="text-slate-400 text-sm mt-1">Use code: WELCOME20</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/20">
                  <p className="text-white font-medium">Free shipping on orders over $50</p>
                  <p className="text-slate-400 text-sm mt-1">Applied automatically</p>
                </div>
              </div>
            </div>

            {/* Gift Options */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 text-blue-500 mb-4">
                <FaGift className="text-2xl" />
                <h3 className="text-white font-semibold">Gift Options</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/20">
                  <p className="text-white font-medium">Add a Gift Message</p>
                  <textarea
                    placeholder="Write your gift message here..."
                    className="w-full mt-2 px-4 py-2 rounded-xl bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    rows="2"
                  ></textarea>
                </div>
                <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/20">
                  <p className="text-white font-medium">Gift Wrapping</p>
                  <p className="text-slate-400 text-sm mt-1">Add premium gift wrapping for $5</p>
                  <label className="flex items-center mt-2 text-slate-300">
                    <input type="checkbox" className="form-checkbox rounded bg-slate-700/50 border-slate-600 text-blue-500 focus:ring-blue-500/20" />
                    <span className="ml-2">Add gift wrapping</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 