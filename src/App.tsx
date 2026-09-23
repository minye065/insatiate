import "./styles.css";

function App(){
    const handleplay = () => {
        alert("hihithere2");
    };

    return(
        /// note: add some more stuff here later like class system or smth idk
        <main id="home" className="placeholder">
            <div className="placeholder-content">
                <h2>splash text</h2>
                <p>placeholder2</p>

                <button onClick={handleplay}>
                    plz play we need this speed
                </button>
            </div>

        </main>

    );
}

export default App