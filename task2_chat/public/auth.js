async function register() {
  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  });

  const data = await res.json();
  msg.innerText = data.success ? "Registered!" : "User exists";
}

async function login() {
  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  });

  const data = await res.json();
  if (data.success) {
    localStorage.setItem("user", username.value);
    location.href = "/";
  } else {
    msg.innerText = "Invalid login";
  }
}
