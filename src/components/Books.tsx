import './Books.css';

const Books = () => {
    const books = [
        { title: "The Fountainhead", cover: "https://m.media-amazon.com/images/I/71oOIZp2XcL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Atlas Shrugged", cover: "https://m.media-amazon.com/images/I/81xXj11CIML._AC_UF1000,1000_QL80_.jpg" },
        { title: "Don't Make Me Think", cover: "https://m.media-amazon.com/images/I/71pB3D+uAQL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Steal Like an Artist", cover: "https://m.media-amazon.com/images/I/71GkVhYwBwL._AC_UF1000,1000_QL80_.jpg" },
        { title: "The Great Mental Models", cover: "https://m.media-amazon.com/images/I/61N7-kKryxL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Serve to Win", cover: "https://m.media-amazon.com/images/I/71b2L-q5bSL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Stupidity", cover: "https://m.media-amazon.com/images/I/71x2a0Y5G4L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Mastery", cover: "https://m.media-amazon.com/images/I/71LRdEPNDQL._AC_UF1000,1000_QL80_.jpg" }
    ];

    return (
        <section className="books-section section-container">
            <h2 className="books-title">
                Books became <strong>companions</strong> over time.<br />
                From never reading a <strong>comic</strong><br />
                to finding myself drawn to <strong>Ayn Rand.</strong>
            </h2>

            <div className="books-grid">
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <div className="book-cover">
                            <img src={book.cover} alt={book.title} className="front" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Books;
