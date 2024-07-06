import React, { } from 'react';


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
          <h6 className="m-0">Welcome back, ICT User🚀</h6>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content ">
    <div className="container-fluid ">
      {/* Small boxes (Stat box) */}
      <div className='bgitem'>
        <div className="p-2"> Hello!!</div>
      <div className="row p-2">
      <div className="col-md-3 col-sm-6 col-12 ">
  <div className="info-box">
    <span className="info-box-icon bg-info"><i className="fa fa-database" /></span>
    <div className="info-box-content">
      <span className="info-box-text text-primary font-weight-bold">1. Connect your data </span>
    </div>
    <span className=""><i className="fa fa-chevron-right" /></span>
    {/* /.info-box-content */}
  </div>
  {/* /.info-box */}
</div>

        {/* ./col */}
        <div className="col-md-3 col-sm-6 col-12 ">
  <div className="info-box">
    <span className="info-box-icon bg-info"><i className="fa fa-chart-bar" /></span>
    <div className="info-box-content">
      <span className="info-box-text text-primary font-weight-bold ">2. Create a chart </span>
    </div>
    <span className=""><i className="fa fa-chevron-right" /></span>
    {/* /.info-box-content */}
  </div>
  {/* /.info-box */}
</div>
        {/* ./col */}
        <div className="col-md-3 col-sm-6 col-12 ">
  <div className="info-box">
    <span className="info-box-icon bg-info"><i className="fa fa-desktop" /></span>
    <div className="info-box-content">
      <span className="info-box-text text-primary font-weight-bold">3. Create a dashboard </span>
    </div>
    <span className=""><i className="fa fa-chevron-right" /></span>
    {/* /.info-box-content */}
  </div>
  {/* /.info-box */}
</div>
<div className="col-md-3 col-sm-6 col-12 ">
  <div className="info-box">
    <span className="info-box-icon bg-info"><i className="fa fa-users" /></span>
    <div className="info-box-content">
      <span className="info-box-text text-primary font-weight-bold">4. Invite teammates </span>
    </div>
    <span className=""><i className="fa fa-chevron-right" /></span>
    {/* /.info-box-content */}
  </div>
  {/* /.info-box */}
</div>
        {/* ./col */}
      </div> 
      {/* End */}
</div>
      <br></br>
      {/* /.row */}
      {/* Main row */}
      {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          {/* <h1>ChartJS</h1> */}
          <ul className="navbar-nav">
            <li className='chart'><a href="#"> Recent view</a></li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item btn btn-outline-light"><a href="#" >MANAGE TABS</a></li>
            
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          {/* AREA CHART */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Area Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="areaChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* DONUT CHART */}
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Donut Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="donutChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* PIE CHART */}
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Pie Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
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
              <h3 className="card-title">Line Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="lineChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* BAR CHART */}
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Bar Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="barChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* STACKED BAR CHART */}
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Stacked Bar Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="stackedBarChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col (RIGHT) */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>


    </div>
  );
}

export default Home;