<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>

  <!-- ✅ Bootstrap -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

  <!-- ✅ Google Fonts + Font Awesome -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
    .gradient-custom {
      background: linear-gradient(to right, #141e30, #243b55);
    }
    .form-label {
      text-align: left;
      display: block;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <form id="login_form" autocomplete="on">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">Please enter your login and password!</p>

                  <div class="form-outline form-white mb-4 text-start">
                    <label class="form-label" for="typeEmailX">Email</label>
                    <input type="email" id="typeEmailX" class="form-control form-control-lg" required />
                  </div>

                  <div class="form-outline form-white mb-4 text-start">
                    <label class="form-label" for="typePasswordX">Password</label>
                    <input type="password" id="typePasswordX" class="form-control form-control-lg" required />
                  </div>

                  <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#">Forgot password?</a></p>

                  <button id="login_btn" type="button" class="btn btn-outline-light btn-lg px-5">
                    <i class="fas fa-sign-in-alt me-2"></i>Login
                  </button>
                  <button id="logout_btn" type="button" class="btn btn-outline-danger btn-lg px-5 mt-3">
                    <i class="fas fa-sign-out-alt me-2"></i>Logout
                  </button>
                </div>

                <div>
                  <p class="mb-0">Don't have an account? <a href="#" class="text-white-50 fw-bold">Sign Up</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ✅ 내부 스크립트로 이벤트 처리 -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const loginBtn = document.getElementById("login_btn");
      const logoutBtn = document.getElementById("logout_btn");

      loginBtn.addEventListener("click", function () {
        const email = document.getElementById("typeEmailX").value;
        const password = document.getElementById("typePasswordX").value;

        if (email === "" || password === "") {
          alert("이메일과 비밀번호를 입력해주세요.");
          return;
        }

        // 테스트 로그인 로직
        if (email === "test@example.com" && password === "1234") {
          alert("로그인 성공!");
        } else {
          alert("이메일 또는 비밀번호가 잘못되었습니다.");
        }
      });

      logoutBtn.addEventListener("click", function () {
        alert("로그아웃 되었습니다.");
        // 로그인 상태 초기화 동작이 필요하다면 여기에 작성
      });
    });
  </script>
</body>
</html>
