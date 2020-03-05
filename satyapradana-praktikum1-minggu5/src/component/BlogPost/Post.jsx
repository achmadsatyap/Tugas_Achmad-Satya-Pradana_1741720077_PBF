import React from "react";

const Post = props => {
  return (
    <div className="artikel">
      <div className="gambar-artikel">
        <img
          src="http://placeimg.com/80/80/tech"
          al="Gambar Thumbnail Arikel"
        ></img>
      </div>
      <div className="konten-artikel">
        <p className="nim">NIM: {props.nim}</p>
        <p className="nama">Nama: {props.nama}</p>
        <p className="alamat">Alamat: {props.alamat}</p>
        <p className="hp">Nomor HP: {props.hp}</p>
        <p className="angkatan">Angkatan (Tahun): {props.angkatan}</p>
        <p className="status">Status: {props.status}</p>
        <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idMahasiswa)}>
          Hapus
        </button>
      </div>
    </div>
  );
};

export default Post;
