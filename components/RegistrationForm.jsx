import React, { useState } from "react";
import "./Registration.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    namaDepan: "",
    namaBelakang: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    email: "",
    noTelp: "",
    pekerjaan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pendaftaran Berhasil!");
  };

  return (
    <div className="registration-section">
      <h3 className="registration-title">Formulir Pendaftaran</h3>
      <div className="form-container">
        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="nama-depan">Nama Depan :</label>
              <input
                type="text"
                id="nama-depan"
                name="namaDepan"
                value={formData.namaDepan}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nama-belakang">Nama Belakang :</label>
              <input
                type="text"
                id="nama-belakang"
                name="namaBelakang"
                value={formData.namaBelakang}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="tanggal-lahir">Tanggal Lahir :</label>
              <input
                type="date"
                id="tanggal-lahir"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jenis-kelamin">Jenis Kelamin :</label>
              <select
                id="jenis-kelamin"
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleChange}
                required
              >
                <option value="">Pilih</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="alamat">Alamat :</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="no-telp">No. Telp :</label>
            <input
              type="tel"
              id="no-telp"
              name="noTelp"
              value={formData.noTelp}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pekerjaan">Pekerjaan :</label>
            <input
              type="text"
              id="pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-submit-wrapper">
            <button type="submit" className="submit-button">
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
