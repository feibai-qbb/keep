import service from "@/util/service.js"
export function getlink(url) {
    return new Promise((resolve) => {
        service.request({
            url,
            method: "GET",
        }).then((ok) => {
            resolve(ok)
        })
    })
}