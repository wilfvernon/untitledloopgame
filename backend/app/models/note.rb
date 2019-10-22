class Note < ApplicationRecord
    belongs_to :loop
    after_initialize :default_values

  private
    def default_values
      self.velocity ||= 63
      self.volume ||= 127
      self.save
    end
end
