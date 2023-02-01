export const authService = (options, email, password) => {
    const url = "http://localhost:3030/users" + options;
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
}