import { assertMethod, defineEventHandler } from 'h3'
import { proxyToCms } from '../../utils/proxy-to-cms'

export default defineEventHandler((event) => {
    assertMethod(event, ['GET', 'HEAD'])
    return proxyToCms(event, true)
})
