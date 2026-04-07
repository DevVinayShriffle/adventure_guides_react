json.array! @destinations do |destination|
  json.name destination.name
  json.description destination.description
  json.location destination.location
end