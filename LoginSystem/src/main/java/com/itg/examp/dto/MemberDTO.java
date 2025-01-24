package com.itg.examp.dto;

import org.apache.ibatis.type.Alias;

// MyBatis에서 사용할 별칭 설정 ("memb"라는 별칭으로 사용)
@Alias("memb")
public class MemberDTO {
    // 회원 고유 ID
    private int id;
    
    // 회원 아이디 (로그인에 사용)
    private String mid;
    
    // 회원 비밀번호
    private String mpw;
    
    // 회원 이름
    private String name;
    
    // 회원 나이
    private int age;
    
    // 회원 주소
    private String address;

    // 객체의 필드 값을 문자열로 반환하는 메서드 (디버깅 및 로그 출력용)
    @Override
    public String toString() {
        return "MemberDTO [id=" + id + ", mid=" + mid + ", mpw=" + mpw + ", name=" + name + ", age=" + age
                + ", address=" + address + "]";
    }

    // ID를 반환하는 getter 메서드
    public int getId() {
        return id;
    }

    // ID를 설정하는 setter 메서드
    public void setId(int id) {
        this.id = id;
    }

    // 아이디(mid)를 반환하는 getter 메서드
    public String getMid() {
        return mid;
    }

    // 아이디(mid)를 설정하는 setter 메서드
    public void setMid(String mid) {
        this.mid = mid;
    }

    // 비밀번호(mpw)를 반환하는 getter 메서드
    public String getMpw() {
        return mpw;
    }

    // 비밀번호(mpw)를 설정하는 setter 메서드
    public void setMpw(String mpw) {
        this.mpw = mpw;
    }

    // 이름(name)을 반환하는 getter 메서드
    public String getName() {
        return name;
    }

    // 이름(name)을 설정하는 setter 메서드
    public void setName(String name) {
        this.name = name;
    }

    // 나이(age)를 반환하는 getter 메서드
    public int getAge() {
        return age;
    }

    // 나이(age)를 설정하는 setter 메서드
    public void setAge(int age) {
        this.age = age;
    }

    // 주소(address)를 반환하는 getter 메서드
    public String getAddress() {
        return address;
    }

    // 주소(address)를 설정하는 setter 메서드
    public void setAddress(String address) {
        this.address = address;
    }
}
