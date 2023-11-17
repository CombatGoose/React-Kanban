import { useState } from "react"

import './style.scss'

const App = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        type: ""
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

    const handleDeleteProduct = (productToDelete) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product !== productToDelete)
        )
      }

    const todoProducts = products.filter((product) => product.type === "to do")
    const inProgressProducts = products.filter((product) => product.type === "in progress")
    const doneProducts = products.filter((product) => product.type === "done")

    return (
        <div className="body">
                            <div className="input-container">
                <div>
                    <div className="first-block">
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
                    </div>
                        <div className="second-block">
                        <select
                    value={form.type}
                    onChange={(e) => handleUpdateForm("type", e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="to do">To Do</option>
                    <option value="in progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button className="button-create" onClick={handleCreateProduct}>Create</button>
                        </div>
            </div>
                </div>  
            <div className="list-container">
            <div>
                <h2>To Do</h2>
                <ul>
                    {todoProducts.map((el, index) => (
                        <li key={index}>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                            <button onClick={() => handleDeleteProduct(el)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>In Progress</h2>
                <ul>
                    {inProgressProducts.map((el, index) => (
                        <li key={index}>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                            <button onClick={() => handleDeleteProduct(el)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Done</h2>
                <ul>
                    {doneProducts.map((el, index) => (
                        <li key={index}>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                            <button onClick={() => handleDeleteProduct(el)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            </div>          
        </div>
    )
}

export default App