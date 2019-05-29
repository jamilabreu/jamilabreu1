function Home() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          marginBottom: "40px",
          width: "320px"
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "800",
            lineHeight: "35px",
            marginBottom: "20px"
          }}
        >
          Jamil Abreu
        </div>
        <div
          style={{
            display: "flex",
            lineHeight: "19px",
            marginBottom: "15px"
          }}
        >
          <img
            src="/static/images/me.png"
            style={{
              background: "#f5f5f5",
              borderRadius: "4px",
              height: "50px",
              marginRight: "15px",
              width: "50px"
            }}
          />
          ai! welcome, friend. a few quick facts about me:
        </div>
        <div style={{ lineHeight: "25px", marginBottom: "20px" }}>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>
              started an awesome{" "}
              <a href="http://on.fb.me/1sCCSCa" target="_blank">
                conference
              </a>
            </li>
            <li>
              <a
                href="http://gladwell.com/are-you-a-connector/"
                target="_blank"
              >
                connecting
              </a>{" "}
              people makes me happy
            </li>
            <li>
              sleep in a{" "}
              <a
                href="https://www.hayneedle.com/product/xlbrazilianfabrichammock.cfm"
                target="_blank"
              >
                hammock
              </a>
            </li>
            <li>
              <a
                href="https://www.peakdesign.com/collections/travel-bags/products/travel-backpack"
                target="_blank"
              >
                one bag
              </a>{" "}
              carries all my stuff
            </li>
            <li>
              did some things with{" "}
              <a
                href="http://www.nytimes.com/2010/05/08/sports/baseball/08drugs.html?_r=0"
                target="_blank"
              >
                MLB
              </a>{" "}
              &{" "}
              <a href="https://automattic.com/about/" target="_blank">
                A8C
              </a>
            </li>
          </ul>
        </div>
        <div
          className="social"
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            fontSize: "40px",
            justifyContent: "space-between",
            padding: "0 2px"
          }}
        >
          <a href="mailto:abreu.jamil%40gmail.com?subject=Ai!">
            <i className="far fa-envelope" />
          </a>
          <a href="https://www.facebook.com/jamil.abreu" target="_blank">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://twitter.com/jamilabreu" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://instagram.com/jamilabreu" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://jamilabreu.tumblr.com" target="_blank">
            <i className="fab fa-tumblr" />
          </a>
        </div>
      </div>
      <style global jsx>{`
        .social a {
          color: #ccc;
        }
        .social a:first-child:hover {
          color: #2ebe60;
        }
        .social a:nth-child(2):hover {
          color: #3b5998;
        }
        .social a:nth-child(3):hover {
          color: #1da1f2;
        }
        .social a:nth-child(4):hover {
          color: #e1306c;
        }
        .social a:nth-child(5):hover {
          color: #35465c;
        }
      `}</style>
    </div>
  );
}

export default Home;
