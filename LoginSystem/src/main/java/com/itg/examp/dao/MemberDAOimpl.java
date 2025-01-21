package com.itg.examp.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itg.examp.dto.MemberDTO;
@Repository
public class MemberDAOimpl implements MemberDAO {
	@Autowired
	SqlSessionTemplate session;
	@Override
	public int signupMember(MemberDTO member) {
		System.out.println(member.getMpw());
		System.out.println(member.getName());
		System.out.println(member.getAddress());
		System.out.println(member.getAge());		
		int res =  session.insert("memberMapper.signup",member);
		System.out.println("회원가입DAO:"+res);
		return res;
	}
	@Override
	public MemberDTO signinMemeber(Map<String, String> data) {
		MemberDTO member = session.selectOne("memberMapper.signin", data);
		return member;
	}
	@Override
	public List<MemberDTO> memberList() {
		List<MemberDTO> ll = session.selectList("memberMapper.memberList");
		return ll;
	}
}