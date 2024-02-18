<template>
	<div class="dragDrop">
        <h1>Hello World!</h1>
        <p>Drag the boxes below to somewhere in your OS (Finder/Explorer, Desktop, etc.) to copy an example markdown file.</p>
        <div style="border:2px solid black;border-radius:3px;padding:5px;display:inline-block" draggable="true" id="drag1">Drag me - File 1</div>
        <div style="border:2px solid black;border-radius:3px;padding:5px;display:inline-block" draggable="true" id="drag2">Drag me - File 2</div>
	</div>
</template>

<script setup>

onMounted(()=>{
    document.getElementById('drag1').ondragstart = (event) => {
        event.preventDefault()
        window.electron.startDrag('drag-and-drop-1.md')
    }

    document.getElementById('drag2').ondragstart = (event) => {
        event.preventDefault()
        window.electron.startDrag('drag-and-drop-2.md')
    }
})

</script>

<style lang="less" scoped>
.dragDrop {
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
}
</style>
