const loadscript = async (src) => {
    return new Promise((res, rej) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            res(src);
        };
        document.head.append(script);
    });
}

const main2 = async () => {
    console.log(new Date().getTime());
    let a = await loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js');
    console.log(a);
    console.log(new Date().getMilliseconds());
}

main2();
