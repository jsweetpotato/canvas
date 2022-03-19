# Create circles random position & mouseover effect
### **[TUTORIAL LINK](https://youtu.be/vxljFhP2krI)**

<br>
1. 랜덤 원 생성

<br>
2. 원의 범위 설정
<br>
<br>

```js
canvas.width(height) - radius // 오른쪽과 아래 시작 범위
radius // 왼쪽과 위 시작 범위

if(this.x + radius > canvas.width) // 반대편으로 diration변경
if(this.x - radius < 0) // 반대편 diration으로 변경
```

<br>
3. 캔버스 끝에 다다랐을 때 diraction 변경
<br>
<br>

```js
if(this.x + radius > canvas.width) this.dx = -this.dx
```

<br>
4. 마우스 이벤트 범위 설정
<br>
<br>

```js
// 마우스 위치를 clientX와 clientY로 지정
// X범위와 Y범위를 지정

let distance = 100; // 범위값

if(mouse.x - this.x < distance || mouse.x - this.x > -distance ) // X 범위
if(mouse.y - this.y < distance || mouse.y - this.y > -distance ) // Y 범위
```
<br>
5. resize 이벤트
<br>
<br>

```js
addEventListener.("resize", ()=>{
  // 캔버스 크기 재설정
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();// 구 재생성
})
```