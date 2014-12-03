# A sample Guardfile
# More info at https://github.com/guard/guard#readme

## Uncomment and set this to only include directories you want to watch
directories %w(css _sass)

## Uncomment to clear the screen before every task
# clearing :on

guard 'livereload', grace_period: 2 do
  watch(%r{css/.+\.(scss|js|html)})
end
