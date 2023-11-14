import { useState } from "react"

const App = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        type: "",
        id: ""
    })
    const [products, setProducts] = useState([])

    const handleUpdateForm = (type, value) => {
        setForm({
            ...form,
            [type]: value
        })
    }

    const handleCreateProduct = () => {
        if (form.name && form.price && form.type) {
            setProducts([
                ...products,
                {
                    ...form
                }
            ])
            setForm({
                name: "",
                price: "",
                type: "",
            })
        } else {
            alert("Please fill out all fields.")
        }
    }

    const todoProducts = products.filter((product) => product.type === "to do")
    const inProgressProducts = products.filter((product) => product.type === "in progress")
    const doneProducts = products.filter((product) => product.type === "done")

    return (
        <div style={{ display: "flex" }}>
            <div style={{ margin: "20px" }}>
                <h2>To Do</h2>
                <ul>
                    {todoProducts.map((el, index) => (
                        <li key={index}>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ margin: "20px" }}>
                <h2>In Progress</h2>
                <ul>
                    {inProgressProducts.map((el, index) => (
                        <li key={index}>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ margin: "20px" }}>
                <h2>Done</h2>
                <ul>
                    {doneProducts.map((el, index) => (
                        <li key={index}>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Write task"
                    value={form.name}
                    onChange={(e) => handleUpdateForm("name", e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Write task desciption"
                    value={form.price}
                    onChange={(e) => handleUpdateForm("price", e.target.value)}
                />
                <select
                    value={form.type}
                    onChange={(e) => handleUpdateForm("type", e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="to do">To Do</option>
                    <option value="in progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button onClick={handleCreateProduct}>Create</button>
            </div>
        </div>
    )
}

export default App