<template>
  <div class="main">
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
  components: {
    Button: Button
  }
}
</script>

<style>

</style>