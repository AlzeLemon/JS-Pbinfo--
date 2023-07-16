function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

async function fn(event){

    let ta = document.querySelectorAll("textarea") 
    let bu = document.querySelectorAll("button")
    switch (event.data.data.mode){
        case "cmp":{
            ta[1].value = event.data.data.original;
            bu[1].click();
            await waitOneSecond();
            let answer = String.prototype.concat("//Written in Rust\n//",ta[0].value,"\n\n\n",event.data.data.compiled);
            let childwindow = window.open('https://www.pbinfo.ro/ajutor');
            await waitOneSecond();
            await waitOneSecond();
            await waitOneSecond();
            childwindow.postMessage({
                data:{
                    key: "cmp",
                    value: answer,
                    mode: "autoclose" 
                },
                
            },
            "*"
            
            );
            while(childwindow.closed==false){
                await waitOneSecond();
            }
            window.close();
            
            break;
        }
    }
}

window.addEventListener(
    "message",
    (event) => {
        fn(event);
    },
    false
);      