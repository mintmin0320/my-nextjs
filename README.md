
![스크린샷 2023-08-03 오후 6 15 59](https://github.com/mintmin0320/my-nextjs/assets/114549939/2547111c-7204-4902-8fc8-bbadf560e997)


![스크린샷 2023-08-03 오후 6 17 44](https://github.com/mintmin0320/my-nextjs/assets/114549939/9f999668-7f0b-4d7c-92c7-cb4a323a02e6)

![스크린샷 2023-08-03 오후 6 18 16](https://github.com/mintmin0320/my-nextjs/assets/114549939/cf8215f0-6cc2-4370-a4e7-36fff21e616d)


![image](https://github.com/mintmin0320/my-nextjs/assets/114549939/9451cc1f-32f0-41ce-b666-6773d3f33723)

https://github.com/mintmin0320/my-nextjs/assets/114549939/85a1532e-6ee5-4c04-92fb-08f9854c33ce

<br/>
<br/>

git-flow

|브랜치 종류|설명|
|------|---|
|main|테스트 서버에서 테스트가 끝나고 운영서버로 배포 할 수 있는 브랜치|
|develop|개발을 위한 브랜치|
|feature|하나의 기능을 개발하기 위한 브랜치|
|hotfix|운영중인 버전에서 발생한 버그를 수정 하는 브랜치|

- feature 브랜치는 하나의 기능을 개발하기 위한 브랜치입니다. 부모는 develop이며, 개발이 완료되면 develop에 merge합니다. 브랜치 이름은 보통 feature-1/*이 됩니다.
develop 브랜치는 개발을 위한 브랜치입니다. 여러 feature들이 merge되는 장소이며, 아직 release되지 않은 기능들이 모여 있게 됩니다.
- master 브랜치는 실제 운영 중인 서비스의 브랜치입니다.
- hotfix 브랜치는 서비스에 문제가 발생했을 때 핫픽스에 해당하는 브랜치입니다. 기능 개발(feature) 등과 달리 빠르게 대처해야 할 필요가 있기 때문에, master 브랜치에 직접 merge하는 전략을 취합니다. develop과의 차이가 발생하기 때문에, 나중에 차이를 merge할 필요가 있습니다.
<br/>
<br/>

커밋 메시지

|타입 종류|설명|
|------|---|
|feat|새로운 기능에 대한 커밋|
|fix|	수정에 대한 커밋|
|bug|버그에 대한 커밋|
|build|빌드 관련 파일 수정에 대한 커밋|
|ci/cd|배포 커밋|
|docs|문서 수정에 대한 커밋|
|style|코드 스타일 혹은 포맷 등에 관한 커밋|
|refactor|코드 리팩토링에 대한 커밋|
|test|테스트 코드 수정에 대한 커밋|
