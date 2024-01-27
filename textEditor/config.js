export const LAYOUT = `
  <div class="row">
    <div class="col">
      <div class="first box">
        <input class="btn-size" type="number" value="20" min="1" max="100"></input>
      </div>
      <div class="second box">
        <button type="button" class="btn btn-bold">
          <i class="fa-solid fa-bold"></i>
        </button>
        <button type="button" class="btn btn-italic">
          <i class="fa-solid fa-italic"></i>
        </button>
        <button type="button" class="btn btn-underline">
          <i class="fa-solid fa-underline"></i>
        </button>
      </div>
      <div class="third box">
        <button type="button" class="btn btn-align-left">
          <i class="fa-solid fa-align-left"></i>
        </button>
        <button type="button" class="btn btn-align-center">
          <i class="fa-solid fa-align-center"></i>
        </button>
        <button type="button" class="btn btn-align-right">
          <i class="fa-solid fa-align-right"></i>
        </button>
      </div>
      <div class="fourth box">
        <button type="button" class="btn btn-uppercase">aA</button>
        <button type="button" class="btn btn-reset">
          <i class="fa-solid fa-text-slash"></i>
        </button>
        <input type="color" class="btn-color" />
      </div>
    </div>
  </div>
  <br />
  <div class="row">
    <div class="col">
      <textarea class="textarea" placeholder="Type here"></textarea>
    </div>
  </div>
  <br />
  <div class="bottom-toolbar">
    <button class="btn btn-download">
      <i class="fa fa-download" aria-hidden="true"></i>
    </button>
  </div>
`;
