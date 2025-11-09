import React, { useState } from 'react';


export default function App() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);


const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (!/^\d{6,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to submit form. Try again later.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <header className="py-6 bg-white shadow-sm">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold">EZ</div>
            <h1 className="text-xl font-semibold">EZ Labs</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Build better products with <span className="text-primary">EZ Labs</span>
            </h2>
            <p className="mt-6 text-gray-700 max-w-xl">
              We help teams design, build, and ship faster. This is the homepage replica with a responsive contact form.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium shadow">Contact Us</a>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img src="/hero-mockup.png" alt="mockup" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gradient-to-b from-white to-bg">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="text-gray-600 mt-2">Have a project or question? Send us a message and we’ll get back to you.</p>


            {submitted ? (
              <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-100">
                <p className="font-medium text-green-800">Form Submitted</p>
                <button onClick={resetForm} className="mt-3 px-4 py-2 rounded bg-primary text-white">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className={`rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
                  {errors.name && <small className="text-red-500 mt-1">{errors.name}</small>}
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} className={`rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
                  {errors.email && <small className="text-red-500 mt-1">{errors.email}</small>}
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium mb-1">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className={`rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-400' : 'border-gray-200'}`} />
                  {errors.phone && <small className="text-red-500 mt-1">{errors.phone}</small>}
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={`rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
                  {errors.message && <small className="text-red-500 mt-1">{errors.message}</small>}
                </div>
                <div className="md:col-span-2 flex items-center justify-between mt-2">
                  <small className="text-gray-500">We respect your privacy.</small>
                  <div className="flex gap-3">
                    {loading ? (
                      <button type="button" disabled className="px-4 py-2 rounded bg-gray-300 text-white">Submitting...</button>
                    ) : (
                      <button type="submit" className="px-5 py-2 rounded bg-primary text-white">Submit</button>
                    )}
                    <button type="button" onClick={resetForm} className="px-4 py-2 rounded border">Reset</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-8">
<div className="container text-center text-sm text-gray-500">© {new Date().getFullYear()} EZ Labs — Built for assignment</div>
</footer>
</main>
);
}