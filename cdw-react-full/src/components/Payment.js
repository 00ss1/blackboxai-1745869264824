import React from 'react';

const Payment = ({ amount, productName }) => {
  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    loadRazorpay();
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_API_KEY', // Replace with your Razorpay API key
      amount: amount * 100, // amount in paise
      currency: 'INR',
      name: 'CDW Clone',
      description: `Payment for ${productName}`,
      handler: function (response) {
        alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
        // TODO: Handle post-payment success logic here
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        product_name: productName,
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
    >
      Pay ₹{amount}
    </button>
  );
};

export default Payment;
