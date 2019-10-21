class Loop < ApplicationRecord
    has_many :notes, :dependent => :destroy
    validates :name, :beats_per_bar, :bars, :BPM presence: true
    validates :beats_per_bar, :bars, :BPM numericality: { only_integer: true }
    validates :beats_per_bar, :bars, :BPM, :numericality => { :greater_than_or_equal_to => 0 }
    validates :beats_per_bar, :numericality => { :less_than_or_equal_to => 128 }
    validates :bars, :numericality => { :less_than_or_equal_to => 16 }
    validates :BPM, :numericality => { :less_than_or_equal_to => 160 }

end
