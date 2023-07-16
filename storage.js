/*
data:{
    key: "key",
    value: "value",
    mode: "normal" / "autoclose" 
}
*/

window.addEventListener(
    "message",
    (event) => {
        localStorage.setItem(event.data.data.key, event.data.data.value);
        switch (event.data.data.mode) {
            case "normal":{
                break;
            }
            case "autoclose":{
                window.close();
                break;
            }
        }
    },
    false
);