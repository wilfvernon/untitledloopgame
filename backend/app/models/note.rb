class Note < ApplicationRecord
  belongs_to :loop
  belongs_to :recording
  after_initialize :default_values

  private

  def default_values
    self.delay ||= 0
    self.velocity ||= 63
    self.volume ||= 127
    self.save
  end
end
