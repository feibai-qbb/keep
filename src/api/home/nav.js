import server from "@/util/server.js"
export function getlink(url) {
    return new Promise((resolve) => {
        server.request({
            url,
            method: "GET",
        }).then((ok) => {
            resolve(ok)
        })
    })
}