<template>
  <div>
    <h1>Header Component</h1>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/portfolio">Porfolio</router-link>
            </li>
            <li>
              <router-link to="/stocks">Stocks</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">End Day</a></li>
            <li class="dropdown">
              <a href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                Save &amp; Load <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
