package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

// Spring Batch 작업 구성을 위한 설정 클래스
@Configuration
public class BatchConfiguration {
    // 작업 실행 횟수를 저장하는 변수
    int count = 0;

    // 배치 작업(Job) 정의
    @Bean
    public Job helloJob(JobRepository jobRepository, Step helloStep) {
        // JobBuilder를 사용해 "helloJob"이라는 이름의 Job을 생성하고, 첫 번째 Step으로 helloStep을 설정
        return new JobBuilder("helloJob", jobRepository)
                .start(helloStep) // 첫 번째 Step 설정
                .build(); // Job 생성
    }

    // Step 정의
    @Bean
    public Step helloStep(JobRepository jobRepository, Tasklet helloTasklet, PlatformTransactionManager transactionManager) {
        // StepBuilder를 사용해 "helloStep"이라는 이름의 Step을 생성하고, Tasklet과 트랜잭션 매니저를 설정
        return new StepBuilder("helloStep", jobRepository)
                .tasklet(helloTasklet, transactionManager) // Tasklet 설정
                .allowStartIfComplete(true) // Step이 완료된 상태에서도 반복 실행 가능하도록 설정
                .build(); // Step 생성
    }

    // Tasklet 정의 (배치 작업의 실제 로직 수행)
    @Bean
    public Tasklet hellolTasklet() {
        // 람다식을 사용해 Tasklet 구현
        return (contribution, chunkContext) -> {
            // 작업 실행 횟수를 증가시키고 콘솔에 메시지 출력
            count++;
            System.out.println(count + ":: 스프링 배치작업 수행중...");
            return RepeatStatus.FINISHED; // 작업 완료 상태 반환
        };
    }
}