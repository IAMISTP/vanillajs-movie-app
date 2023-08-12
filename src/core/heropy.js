////  component
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render(); //최초실행
  }
  render() {}
}

////  Router
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  const routerView = document.querySelector("router-view");
  //http://localhost:1234/#/about?name=heropy
  //#/about?name=heropy
  const [hash, queryString = ""] = location.hash.split("?");

  //a=123&b=456
  const query = queryString //
    .split("&")
    .reduce((acc, cur) => {
      const [key, value] = cur.split("=");
      acc[key] = value;
      return acc;
    }, {});
  history.replaceState(query, "");

  const currentRoute = routes.find((route) => {
    console.log(route.path);
    //정규표현식을 이용해 hash 와 path 를 비교
    return new RegExp(`${route.path}/?$`).test(hash); //route.path 가 가지고 있는 주소에 / 의 유무체크 와 끝내야하는 $ 도 추가
  });
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0); //페이지의 위치를 최상단으로 이동
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      //popstate : 주소가 바뀌게 되면
      routeRender(routes); //페이지렌더링
    });
    routeRender(routes); //최초호출
  };
}

///// store
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {}; //감시자들
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key], //state['message']
        set: (val) => {
          state[key] = val;
          this.observers[key].forEach((observer) => observer(val));
        },
      }); //this.state 라는 객체데이터의 속성을 정의
    }
  }
  subscribe(key, cb) {
    console.log(this.observers);
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
    //this.state 가 변경되는지 감시
    // this.observers[key] = cb;
  }
}
