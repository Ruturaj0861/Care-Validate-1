import addContext from 'mochawesome/addContext'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const testName = runnable.parent.title + ' -- ' + test.title
    const screenshot = `assets/${Cypress.spec.name}/${testName} (failed).png`
    addContext({ test }, screenshot)

    // Add screen recording
    const videoName = `${testName} (failed).mp4`
    const videoUrl = `../${Cypress.spec.name}/${videoName}` 
    addContext({ test }, videoUrl)
  }
})
