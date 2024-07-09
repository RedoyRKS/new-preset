import React from "react";

function Home() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <div className="content-header ">
          <div className="container-fluid ">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h6 className="m-0">Welcome back, ICTD User🚀</h6>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content ">
          <div className="container-fluid ">
            {/* Small boxes (Stat box) */}
            {/* /.row */}
            <div className="row">
              <div className="col-md-12">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("../../dist/img/card_image.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="card-header"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <h2
                      className="card-title"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        textAlign: "center",
                      }}
                    >
                      Workspace setup guide
                    </h2>
                    <div className="col-md-6" style={{ marginLeft: "10px" }}>
                      <div
                        className="progress rounded"
                        style={{ height: "0.8rem" }}
                      >
                        <div
                          className="progress-bar bg-dark rounded"
                          style={{ width: "40%" }}
                        />
                        <strong
                          style={{ marginTop: "5.5px", marginLeft: "10px" }}
                        >
                          40% complete
                        </strong>
                      </div>
                    </div>

                    <div className="card-tools" style={{ marginLeft: "400px" }}>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus text-dark" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body" style={{ padding: "0.5rem" }}>
                    <p className="text-light">
                      Not sure where to start? Check out our suggestions for
                      getting your first dashboard up and running.
                    </p>
                    <div>
                      {/* Small Box (Stat card) */}
                      <div className="row">
                        <div className="col-lg-3 col-6">
                          {/* small card */}
                          <div className="small-box bg-light">
                            <div className="inner">
                              <h6>1. Connect your data</h6>
                            </div>
                            <a href="#" className="small-box-footer">
                              More info{" "}
                              <i className="fas fa-arrow-circle-right" />
                            </a>
                          </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                          {/* small card */}
                          <div className="small-box bg-light">
                            <div className="inner">
                              <h6>2. Create a chart</h6>
                            </div>
                            <a href="#" className="small-box-footer">
                              More info{" "}
                              <i className="fas fa-arrow-circle-right" />
                            </a>
                          </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                          {/* small card */}
                          <div className="small-box bg-light">
                            <div className="inner">
                              <h6>3. Create a dashboard</h6>
                            </div>
                            <a href="#" className="small-box-footer">
                              More info{" "}
                              <i className="fas fa-arrow-circle-right" />
                            </a>
                          </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                          {/* small card */}
                          <div className="small-box bg-light">
                            <div className="inner">
                              <h6>4. Invite teammates</h6>
                            </div>
                            <a href="#" className="small-box-footer">
                              More info{" "}
                              <i className="fas fa-arrow-circle-right" />
                            </a>
                          </div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <br></br>
            {/* /.row */}
            {/* Main row */}
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
              {/* Content Header (Page header) */}
              <section className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-12 col-md-12">
                      <div className="card card-primary card-outline card-tabs">
                        <div className="card-header p-0 pt-1 border-bottom-0">
                          <ul
                            className="nav nav-tabs"
                            id="custom-tabs-three-tab"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="custom-tabs-three-home-tab"
                                data-toggle="pill"
                                href="#custom-tabs-three-home"
                                role="tab"
                                aria-controls="custom-tabs-three-home"
                                aria-selected="true"
                              >
                                Recent viewed
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="custom-tabs-three-profile-tab"
                                data-toggle="pill"
                                href="#custom-tabs-three-profile"
                                role="tab"
                                aria-controls="custom-tabs-three-profile"
                                aria-selected="false"
                              >
                                Popular
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="custom-tabs-three-messages-tab"
                                data-toggle="pill"
                                href="#custom-tabs-three-messages"
                                role="tab"
                                aria-controls="custom-tabs-three-messages"
                                aria-selected="false"
                              >
                                Favorites
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="custom-tabs-three-settings-tab"
                                data-toggle="pill"
                                href="#custom-tabs-three-settings"
                                role="tab"
                                aria-controls="custom-tabs-three-settings"
                                aria-selected="false"
                              >
                                Examples
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div
                            className="tab-content"
                            id="custom-tabs-three-tabContent"
                          >
                            <div
                              className="tab-pane fade show active"
                              id="custom-tabs-three-home"
                              role="tabpanel"
                              aria-labelledby="custom-tabs-three-home-tab"
                            >
                              <section className="content">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-6">
                                      {/* AREA CHART */}
                                      <div className="card card-primary">
                                        <div className="card-header">
                                          <h3 className="card-title">
                                            Area Chart
                                          </h3>
                                          <div className="card-tools">
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="collapse"
                                            >
                                              <i className="fas fa-minus" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="remove"
                                            >
                                              <i className="fas fa-times" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <div className="chart">
                                            <canvas
                                              id="areaChart"
                                              style={{
                                                minHeight: 250,
                                                height: 250,
                                                maxHeight: 250,
                                                maxWidth: "100%",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        {/* /.card-body */}
                                      </div>
                                      {/* /.card */}
                                      {/* DONUT CHART */}
                                      <div className="card card-danger">
                                        <div className="card-header">
                                          <h3 className="card-title">
                                            Donut Chart
                                          </h3>
                                          <div className="card-tools">
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="collapse"
                                            >
                                              <i className="fas fa-minus" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="remove"
                                            >
                                              <i className="fas fa-times" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <canvas
                                            id="donutChart"
                                            style={{
                                              minHeight: 250,
                                              height: 250,
                                              maxHeight: 250,
                                              maxWidth: "100%",
                                            }}
                                          />
                                        </div>
                                        {/* /.card-body */}
                                      </div>
                                      {/* /.card */}
                                      {/* PIE CHART */}
                                      <div className="card card-danger">
                                        <div className="card-header">
                                          <h3 className="card-title">
                                            Pie Chart
                                          </h3>
                                          <div className="card-tools">
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="collapse"
                                            >
                                              <i className="fas fa-minus" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="remove"
                                            >
                                              <i className="fas fa-times" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <canvas
                                            id="pieChart"
                                            style={{
                                              minHeight: 250,
                                              height: 250,
                                              maxHeight: 250,
                                              maxWidth: "100%",
                                            }}
                                          />
                                        </div>
                                        {/* /.card-body */}
                                      </div>
                                      {/* /.card */}
                                    </div>
                                    {/* /.col (LEFT) */}
                                    <div className="col-md-6">
                                      {/* LINE CHART */}
                                      <div className="card card-info">
                                        <div className="card-header">
                                          <h3 className="card-title">
                                            Line Chart
                                          </h3>
                                          <div className="card-tools">
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="collapse"
                                            >
                                              <i className="fas fa-minus" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="remove"
                                            >
                                              <i className="fas fa-times" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <div className="chart">
                                            <canvas
                                              id="lineChart"
                                              style={{
                                                minHeight: 250,
                                                height: 250,
                                                maxHeight: 250,
                                                maxWidth: "100%",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        {/* /.card-body */}
                                      </div>
                                      {/* /.card */}
                                      {/* BAR CHART */}
                                      <div className="card card-success">
                                        <div className="card-header">
                                          <h3 className="card-title">
                                            Bar Chart
                                          </h3>
                                          <div className="card-tools">
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="collapse"
                                            >
                                              <i className="fas fa-minus" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="remove"
                                            >
                                              <i className="fas fa-times" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <div className="chart">
                                            <canvas
                                              id="barChart"
                                              style={{
                                                minHeight: 250,
                                                height: 250,
                                                maxHeight: 250,
                                                maxWidth: "100%",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        {/* /.card-body */}
                                      </div>
                                      {/* /.card */}
                                      {/* STACKED BAR CHART */}
                                      <div className="card card-success">
                                        <div className="card-header">
                                          <h3 className="card-title">
                                            Stacked Bar Chart
                                          </h3>
                                          <div className="card-tools">
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="collapse"
                                            >
                                              <i className="fas fa-minus" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-tool"
                                              data-card-widget="remove"
                                            >
                                              <i className="fas fa-times" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <div className="chart">
                                            <canvas
                                              id="stackedBarChart"
                                              style={{
                                                minHeight: 250,
                                                height: 250,
                                                maxHeight: 250,
                                                maxWidth: "100%",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        {/* /.card-body */}
                                      </div>
                                      {/* /.card */}
                                    </div>
                                    {/* /.col (RIGHT) */}
                                  </div>
                                  {/* /.row */}
                                </div>
                                {/* /.container-fluid */}
                              </section>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="custom-tabs-three-profile"
                              role="tabpanel"
                              aria-labelledby="custom-tabs-three-profile-tab"
                            >
                              Mauris tincidunt mi at erat gravida, eget
                              tristique urna bibendum. Mauris pharetra purus ut
                              ligula tempor, et vulputate metus facilisis. Lorem
                              ipsum dolor sit amet, consectetur adipiscing elit.
                              Vestibulum ante ipsum primis in faucibus orci
                              luctus et ultrices posuere cubilia Curae; Maecenas
                              sollicitudin, nisi a luctus interdum, nisl ligula
                              placerat mi, quis posuere purus ligula eu lectus.
                              Donec nunc tellus, elementum sit amet ultricies
                              at, posuere nec nunc. Nunc euismod pellentesque
                              diam.
                            </div>
                            <div
                              className="tab-pane fade"
                              id="custom-tabs-three-messages"
                              role="tabpanel"
                              aria-labelledby="custom-tabs-three-messages-tab"
                            >
                              Morbi turpis dolor, vulputate vitae felis non,
                              tincidunt congue mauris. Phasellus volutpat augue
                              id mi placerat mollis. Vivamus faucibus eu massa
                              eget condimentum. Fusce nec hendrerit sem, ac
                              tristique nulla. Integer vestibulum orci odio.
                              Cras nec augue ipsum. Suspendisse ut velit
                              condimentum, mattis urna a, malesuada nunc.
                              Curabitur eleifend facilisis velit finibus
                              tristique. Nam vulputate, eros non luctus
                              efficitur, ipsum odio volutpat massa, sit amet
                              sollicitudin est libero sed ipsum. Nulla lacinia,
                              ex vitae gravida fermentum, lectus ipsum gravida
                              arcu, id fermentum metus arcu vel metus. Curabitur
                              eget sem eu risus tincidunt eleifend ac ornare
                              magna.
                            </div>
                            <div
                              className="tab-pane fade"
                              id="custom-tabs-three-settings"
                              role="tabpanel"
                              aria-labelledby="custom-tabs-three-settings-tab"
                            >
                              Pellentesque vestibulum commodo nibh nec blandit.
                              Maecenas neque magna, iaculis tempus turpis ac,
                              ornare sodales tellus. Mauris eget blandit dolor.
                              Quisque tincidunt venenatis vulputate. Morbi
                              euismod molestie tristique. Vestibulum consectetur
                              dolor a vestibulum pharetra. Donec interdum
                              placerat urna nec pharetra. Etiam eget dapibus
                              orci, eget aliquet urna. Nunc at consequat diam.
                              Nunc et felis ut nisl commodo dignissim. In hac
                              habitasse platea dictumst. Praesent imperdiet
                              accumsan ex sit amet facilisis.
                            </div>
                          </div>
                        </div>
                        {/* /.card */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.container-fluid */}
              </section>
              {/* Main content */}

              {/* /.content */}
            </div>
            {/* /.content-wrapper */}

            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}

export default Home;
