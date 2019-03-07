import { detectExtension, detectMimeType } from './mimetypes'

describe('mimetypes', function () {
  describe('#detectMimeType', function () {
    it('should find exact match', function () {
      const extension = 'doc'
      const contentType = 'application/msword'

      expect(detectExtension(contentType)).to.equal(extension)
    })

    it('should find best match', function () {
      const extension = 'jpeg'
      const contentType = 'image/jpeg'

      expect(detectExtension(contentType)).to.equal(extension)
    })

    it('should use favored extension if match', function () {
      const contentType = 'text/plain'
      const favoredExtension = 'log'

      expect(detectExtension(contentType, favoredExtension)).to.equal(favoredExtension)
    })
  })

  describe('#detectExtension', function () {
    it('should find exact match', function () {
      const extension = 'doc'
      const contentType = 'application/msword'

      expect(detectMimeType(extension)).to.equal(contentType)
    })

    it('should find best match', function () {
      const extension = 'js'
      const contentType = 'application/javascript'

      expect(detectMimeType(extension)).to.equal(contentType)
    })
  })
})
