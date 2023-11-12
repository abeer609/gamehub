import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6cad5ea6851143c79470d86b392777ce"
    }
})
