//common.js 로그인 로그아웃 UI 연동 및 구현
async function login(mid, mpw) { // 로그인 함수 분리
    // Create an object with login credentials
    const logindata = { mid, mpw }; // 사용자 ID(mid)와 비밀번호(mpw)를 포함하는 객체 생성

    // Specify the content type for the request
    const ctype = "application/json"; // 요청 본문이 JSON 형식임을 명시

    // Send a POST request to the login endpoint with the login data
    const res = await fetch("/member/login", { 
        method: "post", // HTTP 요청 메서드: POST
        headers: { "Content-type": ctype }, // 요청 헤더에 Content-Type 설정
        body: JSON.stringify(logindata) // logindata 객체를 JSON 문자열로 변환하여 본문에 포함
    });

    // Parse the JSON response
    const data = await res.json(); // 서버에서 반환된 JSON 응답 데이터를 객체로 변환
    return data; // 응답 데이터를 반환
}

// Function to handle logout
function logout(logoutui) { // 로그아웃 함수 분리
    // Update the logout link text and URL
    logoutui.attr("href", "/member/logout").text("로그아웃"); 
    // "로그아웃" 버튼에 클릭 이벤트 리스너 추가
    logoutui.click(async function (evt) {
        // Check if the button text is "로그아웃"
        if ($(this).text() == "로그아웃") { 
            evt.preventDefault(); // 기본 동작(페이지 이동)을 막음
            // Send a GET request to the logout endpoint
            const res = await fetch($(this).attr("href")); 
            const data = await res.json(); // 서버에서 반환된 JSON 응답 데이터를 객체로 변환
            alert(data.message); // 로그아웃 성공 메시지를 경고창으로 표시
            location.href = "/"; // 로그아웃 후 메인 페이지로 이동
            return false; // 클릭 이벤트 처리를 중단
        }
    });
}