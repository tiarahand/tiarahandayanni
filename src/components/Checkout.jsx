import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [selectedPaymentValue, setSelectedPaymentValue] = useState("");

  const handleApplyVoucher = () => {
    if (voucherCode === "DISKON06") {
      alert("Voucher berhasil dipakai!");
    } else {
      alert("Kode voucher tidak ditemukan!");
    }
  };

  const handlePayment = () => {
    const method = selectedPaymentValue || "Metode belum dipilih";
    const voucherInfo =
      voucherCode === "PAKAIDISKON" ? ` + Voucher ${voucherCode}` : "";
    alert(`Pembelian berhasil dengan metode: ${method}${voucherInfo}`);
  };

  return (
    <div className="checkout-container">
      {/* Bagian Atas */}
      <div className="checkout-top-section">
        <div className="checkout-content">
          <div className="checkout-left">
            <h1 className="checkout-title">
              UX Designer: Digital Product Development
            </h1>
            <div className="checkout-instructor">
              <img
                src="orang.png"
                alt="Instructor"
                className="instructor-avatar"
              />
              <p className="instructor-name">Dimounlif Nelaspaba</p>
            </div>
            <p className="checkout-category">
              Kategori <span className="bold">UI/UX</span>
            </p>
            <p className="checkout-price">Rp. 0</p>
          </div>
          <div className="checkout-right">
            <img src="/design.png" alt="UX Course" className="checkout-image" />
          </div>
        </div>
      </div>

      <div className="checkout-payment-flex-wrapper">
        <div className="checkout-payment-left">
          <div className="checkout-payment-label">Payment Method</div>

          {[
            {
              title: "E-Wallet",
              subtitle: "Transaksi terhubung dengan akun e-wallet",
              options: [
                { value: "ovo", label: "OVO", img: "ovo.png" },
                { value: "gopay", label: "GO-PAY", img: "gopay.png" },
              ],
              name: "ewallet",
            },
            {
              title: "Transfer Bank",
              subtitle:
                "Transaksi perlu upload bukti transfer untuk proses verifikasi",

              options: [
                { value: "bank-xyz", label: "bank-xyz", img: "ovo.png" },
              ],
              name: "bank",
            },
            {
              title: "Transfer Virtual Account",
              subtitle: "Transaksi di cek otomatis",
              options: [
                { value: "mandiri", label: "BANK MANDIRI", img: "mandiri.png" },
                { value: "bca", label: "BANK BCA", img: "bca.png" },
                { value: "bni", label: "BANK BNI", img: "bni.png" },
                { value: "bri", label: "BANK BRI", img: "bri.png" },
              ],
              name: "va",
            },
            {
              title: "Kartu Kredit",
              subtitle: "Transaksi dengan kartu kredit berlogo VISA/MASTERCARD",
              options: [
                {
                  value: "visa-mastercard",
                  label: "VISA/MASTERCARD",
                  logos: ["visa.png", "mastercard.png"],
                },
              ],
              name: "creditcard",
            },
            {
              title: "Minimarket",
              subtitle:
                "Transaksi di gerai retail terdekat dengan biaya layanan tambahan",
              options: [
                {
                  value: "indomaret",
                  label: "INDOMARET",
                  img: "indomaret.png",
                },
                { value: "alfamart", label: "ALFAMART", img: "alfa.png" },
              ],
              name: "minimarket",
            },
          ].map(({ title, subtitle, options, name }) => (
            <form key={name} className="checkout-ewallet-box">
              <div className="checkout-ewallet-title">{title}</div>
              <div className="checkout-ewallet-subtitle">{subtitle}</div>
              {options.map(({ value, label, img, logos }) => (
                <label
                  key={value}
                  className={`checkout-ewallet-option ${
                    selectedPaymentValue === value ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={name}
                    value={value}
                    onChange={() => setSelectedPaymentValue(value)}
                  />
                  {img && <img src={img} alt={label} />}
                  {logos && (
                    <div className="checkout-card-logos">
                      {logos.map((logo, idx) => (
                        <img key={idx} src={logo} alt={`logo-${idx}`} />
                      ))}
                    </div>
                  )}
                  <span>{label}</span>
                </label>
              ))}
            </form>
          ))}
        </div>

        <div className="checkout-summary-box">
          <div className="checkout-summary-section">
            <h3 className="summary-title">Total Price</h3>
            <div className="summary-row">
              <span>Price</span>
              <span>Rp. 0</span>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <span>Rp. 0</span>
            </div>
            <div className="summary-row">
              <span>Potongan Voucher</span>
              <span>Rp. 0</span>
            </div>
          </div>

          <div className="checkout-summary-section">
            <h3 className="summary-title">Voucher</h3>
            <div className="voucher-input-row">
              <input
                type="text"
                placeholder="Input voucher code"
                className="voucher-input"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
              <button
                type="button"
                className="voucher-button"
                onClick={handleApplyVoucher}
              >
                Use
              </button>
            </div>
          </div>

          <div className="checkout-summary-section">
            <h3 className="summary-title">Total Payment</h3>
            <div className="summary-row summary-total">
              <span>Total Payment</span>
              <span>Rp. 0</span>
            </div>
            <p className="summary-note">
              Dengan menyelesaikan pembelian, Anda menyetujui Ketentuan Layanan
              ini
            </p>
            <button
              type="button"
              className="checkout-button"
              onClick={handlePayment}
            >
              Bayar Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
