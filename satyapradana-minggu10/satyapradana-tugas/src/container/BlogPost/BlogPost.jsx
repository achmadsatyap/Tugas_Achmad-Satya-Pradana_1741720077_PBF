import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import API from "../../services/index";

class BlogPost extends Component {
  state = {
    listArtikel: [],
    insertArtikel: {
      id: 1,
      nim: 1,
      nama: "",
      alamat: "",
      hp: "",
      angkatan: 1,
      status: "",
    },
  };

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        listArtikel: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleTambahArtikel = (event) => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    let id = new Date().getTime();
    formInsertArtikel["id"] = id;
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  handleTombolSimpan = () => {
    API.postNewsBlog(this.state.insertArtikel).then(() => {
      this.ambilDataDariServerAPI();
    });
  };

  handleHapusArtikel = (data) => {
    API.deleteNewsBlog(data).then(() => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row"></div>
          <label htmlFor="title" className="col-form-label">
            NIM
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-nim"
              id="nim"
              name="nim"
              onChange={this.handleTambahArtikel}
            />
          </div>
          <div className="form-group row"></div>
          <label htmlFor="title" className="col-form-label">
            Nama
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-nama"
              id="nama"
              name="nama"
              onChange={this.handleTambahArtikel}
            />
          </div>
          <div className="form-group row"></div>
          <label htmlFor="title" className="col-form-label">
            Alamat
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-alamat"
              id="alamat"
              name="alamat"
              onChange={this.handleTambahArtikel}
            />
          </div>
          <div className="form-group row"></div>
          <label htmlFor="title" className="col-form-label">
            Nomor HP:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-hp"
              id="hp"
              name="hp"
              onChange={this.handleTambahArtikel}
            />
          </div>
          <div className="form-group row"></div>
          <label htmlFor="title" className="col-form-label">
            Angkatan
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-angkatan"
              id="angkatan"
              name="angkatan"
              onChange={this.handleTambahArtikel}
            />
          </div>
          <div className="form-group row"></div>
          <label htmlFor="title" className="col-form-label">
            Status
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-status"
              id="status"
              name="status"
              onChange={this.handleTambahArtikel}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleTombolSimpan}
        >
          Simpan
        </button>
        <h2>Daftar Mahasiswa</h2>
        {this.state.listArtikel.map((artikel) => {
          return (
            <Post
              key={artikel.id}
              nim={artikel.id}
              nama={artikel.nama}
              alamat={artikel.alamat}
              hp={artikel.hp}
              angkatan={artikel.angkatan}
              status={artikel.status}
              hapusArtikel={this.handleHapusArtikel}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;