function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponce {
  header = "responce header";
  result = "responce result";
}

class MyError {
  header = "error header";
  message = "error result";
}

function handle(responce: MyResponce | MyError) {
  if (responce instanceof MyResponce) {
    return {
      info: responce.header + responce.result,
    };
  } else return { info: responce.header + responce.message };
}

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  //....
}

setAlertType("success");
setAlertType("warning");
