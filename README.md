# 출퇴근길 빠르게 일기를 쓰기 위해 만든앱

카테고리 그리드를 클릭하는 방식으로 일기의 문장을 완성하는 프로그램

오늘 
[언제] 
    아침
    출근전
    등
[무엇을]
    한 일
    느낀 기분
    등
[각항목별세부내용]
    각 카테고리 json



[카테고리] [카테고리] [카테고리] [카테고리] 이다.
[카테고리] [카테고리] [카테고리] 이다.
[카테고리] [카테고리] [카테고리] 이다.
[카테고리] [카테고리] [카테고리] [카테고리] 이다.

이 저널을 완성한다고 하면 
언제 / 어디서 / 무엇을 / 어떻게
언제 / 무엇을 / 어떻게

형식의 문장이 되어야 한다.

각 카테고리 케이스는 아래와 같이 작성한다
when.json
    {"type":"1", "level":"1" ,"detail":"아침", "index":"1"},
    {"type":"2", "level":"1" ,"detail":"출근전", "index":"1"},
    {"type":"3", "level":"1" ,"detail":"출근후", "index":"1"},
    {"type":"4", "level":"1" ,"detail":"오전", "index":"1"},
    {"type":"5", "level":"1" ,"detail":"점심", "index":"1"},
    {"type":"5", "level":"1" ,"detail":"점심먹고", "index":"1"},
    {"type":"6", "level":"1" ,"detail":"오후", "index":"1"},
    {"type":"7", "level":"1" ,"detail":"저녁", "index":"1"},
    {"type":"7", "level":"1" ,"detail":"저녁 먹고", "index":"1"},
    {"type":"8", "level":"1" ,"detail":"퇴근 후", "index":"1"},
    {"type":"9", "level":"1" ,"detail":"심야", "index":"1"},
    {"type":"10", "level":"1" ,"detail":"새벽", "index":"1"},

where.json
    {"type":"1", "level":"1" ,"detail":"집", "index":"1"},
    {"type":"2", "level":"1" ,"detail":"학교", "index":"1"},
    {"type":"3", "level":"1" ,"detail":"회사", "index":"1"},
    {"type":"4", "level":"1" ,"detail":"출근길", "index":"1"},
    {"type":"5", "level":"1" ,"detail":"식당", "index":"1"},
    {"type":"6", "level":"1" ,"detail":"친구집", "index":"1"},
    {"type":"7", "level":"1" ,"detail":"본가", "index":"1"},
    {"type":"8", "level":"1" ,"detail":"술집", "index":"1"},

what.json
    {"type":"1", "level":"1" ,"detail":"느낀 기분", "index":"1"},
    {"type":"2", "level":"1" ,"detail":"한 일", "index":"1"},
    {"type":"3", "level":"1" ,"detail":"먹은 음식", "index":"1"},
    {"type":"4", "level":"1" ,"detail":"본", "index":"1"},


how.json


상태 정의

current Journal Index
