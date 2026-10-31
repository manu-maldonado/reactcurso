export function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Buscar producto por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            /*style={{
                padding: "8px 12px",
                width: "100%",
                maxWidth: "300px",
                borderRadius: "4px",
                border: "1px solid #ccc",
            }}
                */
            />
        </div>
    );
}