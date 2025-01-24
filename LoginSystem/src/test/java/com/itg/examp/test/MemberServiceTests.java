package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberServiceTests {
    // 경계값 분석(Boundary Analysis): 테스트에서 입력값의 경계에 있는 데이터를 사용하여 유효성과 무효성을 확인합니다.

    // 유효한 아이디와 비밀번호, 그리고 유효하지 않은 아이디와 비밀번호를 저장하는 배열
    String[] rightId; // 유효한 아이디
    String[] wrongId; // 유효하지 않은 아이디
    String[] rightPw; // 유효한 비밀번호
    String[] wrongPw; // 유효하지 않은 비밀번호

    // 테스트할 MemberService 객체를 자동 주입
    @Autowired
    MemberService ms;

    // 각 테스트가 실행되기 전에 호출되는 메서드로, 테스트 데이터를 초기화합니다.
    @BeforeEach
    public void setVariable() {
        // 유효한 아이디와 유효하지 않은 아이디 초기화
        rightId = new String[] {"aa", "abcde", "abcd", "a@E3ool", "bb#cc"}; // 유효한 아이디 예시
        wrongId = new String[] {"aaa", "abc", "aa", "a#c", "123"}; // 유효하지 않은 아이디 예시

        // 유효한 비밀번호와 유효하지 않은 비밀번호 초기화
        rightPw = new String[] {"123456", "214#aa", "aa#11aa", "a@eegd", "44AA@EE"}; // 유효한 비밀번호 예시
        wrongPw = new String[] {"1123677", "214#a", "#11aa", "a@gd", "AA@EE"}; // 유효하지 않은 비밀번호 예시
    }

    // MemberService의 checkId() 메서드를 테스트하는 메서드
    @Test
    public void testPassword() {
        boolean res = false; // 테스트 결과를 저장하는 변수

        // 유효한 아이디를 반복문으로 테스트하여 유효성을 확인
        for (int i = 0; i < rightId.length; i++) {
            res = ms.checkId(rightId[i]); // checkId() 메서드 호출
            assertEquals(true, res, i + ": 올바른 아이디 입니다. :"); // 결과가 true인지 확인
        }

        // 유효하지 않은 아이디를 반복문으로 테스트하여 무효성을 확인
        for (int i = 0; i < wrongId.length; i++) {
            res = ms.checkId(wrongId[i]); // checkId() 메서드 호출
            assertEquals(false, res, i + ": 잘못된 아이디 입니다. :"); // 결과가 false인지 확인
        }
    }

    // MemberService의 checkPassword() 메서드를 테스트하는 메서드
    @Test
    public void testId() {
        boolean res = false; // 테스트 결과를 저장하는 변수

        // 유효한 비밀번호를 반복문으로 테스트하여 유효성을 확인
        for (String pw : rightPw) {
            res = ms.checkPassword(pw); // checkPassword() 메서드 호출
            assertEquals(true, res, ": 올바른 비밀번호 입니다. :"); // 결과가 true인지 확인
        }

        // 유효하지 않은 비밀번호를 반복문으로 테스트하여 무효성을 확인
        for (String pw : wrongPw) {
            res = ms.checkPassword(pw); // checkPassword() 메서드 호출
            assertEquals(false, res, ": 잘못된 비밀번호 입니다. :"); // 결과가 false인지 확인
        }
    }
}